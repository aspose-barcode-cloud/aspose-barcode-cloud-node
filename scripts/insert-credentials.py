import sys
import json
import os

def replace_values_in_file(text_file_path, json_file_path, output_folder_path):
        # Read the JSON file
        with open(json_file_path, 'r') as json_file:
            replacement_values = json.load(json_file)
        

        # Read the text file
        with open(text_file_path, 'r') as text_file:
            content = text_file.read()
        
        values_dict = {
            "clientId": "Client Id from https://dashboard.aspose.cloud/applications",
            "clientSecret": "Client Secret from https://dashboard.aspose.cloud/applications",
            }
        # Replace the old values with the new values
        for new_value_key, old_value  in values_dict.items():
            content = content.replace(old_value, replacement_values[new_value_key])

        # Ensure the output folder exists
        os.makedirs(output_folder_path, exist_ok=True)

        # Generate the output file path
        output_file_path = os.path.join(output_folder_path, os.path.basename(text_file_path))

        # Write the updated content to the output file
        with open(output_file_path, 'w') as output_file:
            output_file.write(content)

if __name__ == "__main__":
    if len(sys.argv) != 4:
        print("Usage: python replace_values.py <text_file_path> <json_file_path> <output_folder_path>")
    else:
        text_file_path = sys.argv[1]
        json_file_path = sys.argv[2]
        output_folder_path = sys.argv[3]
        replace_values_in_file(text_file_path, json_file_path, output_folder_path)
