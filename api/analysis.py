import re

def strip_patterns(string):
    '''
    Removes the following patterns from string
    pattern1: TST*_, SNACK*_
    pattern2: SQ_*
    '''
    pattern1 = r'^\w+\*\s'
    pattern2 = r'^\w+\s\*'
    stripped1 = re.sub(pattern1, '', string)
    stripped_string = re.sub(pattern2, '', stripped1)
    return stripped_string

def remove_characters(string):
    '''
    Removes all characters that come after the first non-alphabetical character that comes after the first space
    Ex:
    TARGET 00034157091 ANN ARBOR MI -> TARGET
    7-ELEVEN 34621 ANN ARBOR MI -> 7-ELEVEN 34621 ANN ARBOR MI
    '''
    # Find the index of the first space
    first_space_index = string.find(' ')
    
    # Find the index of the first non-alphabetical character after the first space
    match = re.search(r'[^a-zA-Z\s]', string[first_space_index:])
    non_alpha_index = match.start() if match else len(string) - first_space_index

    # Remove characters after the first non-alphabetical character
    cleaned_string = string[:first_space_index + non_alpha_index] if first_space_index != -1 else string
    
    return cleaned_string

def clean_df(df_in):
    """
    The big boy cleaning function
    """
    # rename columns
    df_in.rename(columns={'Trans. Date': 'Transaction Date'}, inplace=True)

    # take out payments
    df_in = df_in[df_in['Category'] != 'Payments and Credits']

    # convert column to numeric
    df_in['Amount'] = df_in['Amount'].astype(float)

    # remove leading and trailing whitespaces and punctiation
    df_in['Description'] = df_in['Description'].str.strip()  
    df_in['Description'] = df_in['Description'].str.replace(r'[^\w\s]', '')

    # remove everything that comes after a new line (ex: GOOGLE PAY)
    df_in['Description'] = df_in['Description'].str.split('\n').str[0]

    # apply regex functions
    df_in['Description'] = df_in['Description'].apply(strip_patterns)
    df_in['Description'] = df_in['Description'].apply(remove_characters)

    # strip the aftermath
    df_in['Description'] = df_in['Description'].str.strip()

    return df_in


def get_analysis(df):
    '''
    1. Top Spend categories by percentage money spent
    2. TODO: One place spent just like you (?)
    3. Number of different places spent 
    4. Top 5 Places visited by frequency
    5. Total money spent; and day spent the most
    6. Top 5 places visited by money spent
    '''
    df = clean_df(df)
    res = {}

    # 1. Top Spend categories by percentage money spent
    # Calculate the total money spent
    total_spent = df['Amount'].sum()

    # Group the data by category and calculate the sum of amounts for each category
    category_spent = df.groupby('Category')['Amount'].sum()

    # Calculate the percentage of total money spent for each category
    category_percentage = (category_spent / total_spent) * 100

    # Sort the categories by percentage in descending order
    top_categories = category_percentage.sort_values(ascending=False)
    res['top_categories'] = top_categories
    
    # 2. One place spent just like you (?)

    # 3. Number of different places spent 
    res["num_places_spent"] = df["Description"].nunique()

    # 4. Top 5 Places visited by frequency
    res["top_places"] = df["Description"].value_counts()[:10]

    # 5. Total money spent; and day spent the most
    # Group the data by transaction date and calculate the sum of amounts for each date
    date_spent = df.groupby('Transaction Date')['Amount'].sum()

    # Find the date with the maximum amount spent
    date_with_most_spent = date_spent.idxmax()

    # Get the amount spent for the date with the maximum amount spent
    amount_spent = date_spent[date_with_most_spent]
    
    res["date_with_most_spent"] = date_with_most_spent
    res["most_amount_spent"] = amount_spent

    # 6. Top 5 places visited by money spent
    top_description = df.groupby('Description')['Amount'].sum().nlargest(5)
    res["top_spend_places"] = top_description
    
    print("result: ", res)
    return res
