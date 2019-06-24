# Extract Lessons
Extract lessons is a tool to grab lessons titles on [ACIM website](https://www.acim.org/) and save them in a **JSON** file.

The tool is written in **[Ruby](https://www.ruby-lang.org)**. You must install it on your computer to be able to use the tool.
## Usage
**Rake** task allow to grab all lessons for a specific language. In a **terminal** just type :
```bash
rake extract_lessons en
```
to extract all English lessons.

If you want lessons for all supported languages, just type :
```bash
rake extract_all_lessons
```


## Test
An extensive set of tests is included. If you want to test the code :
```bash
rake test
```
