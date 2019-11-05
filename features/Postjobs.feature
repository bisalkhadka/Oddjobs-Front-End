Feature: <Feature Name>
This is a restful api service test project.
You can use json-mock as an api server. Before runing the script, please init the mock message and start the json-mock server. It can be found in your project's node_modules folder. 
Steps:
1. in command prompt, browse to your project folder,
2. run the following command:
    node_modules\.bin\json-mock.cmd data.json


  Scenario Outline: Get data
    * Get the service api "<URL>" and i should get the '<expectval>'
    Examples: 
      | URL                           | expectval                                                                                                                                                           |
      | http://localhost:1111/showjobs | "Browse the jobs."   |

  Scenario Outline: Post data
    * Post to service api "<URL>" with '<data>' and I should get the '<expectval>'
    Examples: 
      | URL                         | data                                            | expectval                                       |
      | http://localhost:1111/addjob | { "userid":"5dbefeb399761844e4db9b1c","fileToUpload":"","Title": "Goodjobs","Description": "Betterjobs","Category": "","Type": "","Location": "12123","Latitude":"123123","JobDt":"", "Email":"asd@gmail.com"} |  "Job Posted"  |