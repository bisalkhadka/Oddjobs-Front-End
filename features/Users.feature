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
      | http://localhost:1111/cv/5dbefeb399761844e4db9b1c | "CV received."   |

  

  Scenario Outline: Post data
    * Post to service api "<URL>" with '<data>' and I should get the '<expectval>'
    Examples: 
      | URL                         | data                                            | expectval                                       |
      | http://localhost:1111/addcv | { "userid":"5dbefeb399761844e4db9b1c","jid":"5dbf1039bcbb4d45c46f10e5","Username": "Hello", "Email": "Zack@asd.com", "Education": "9999", "Qualification": "asdf", "Experience": "+2"} |  "Your application is sent."  |

      Scenario Outline: Get data
    * Get the service api "<URL>" and i should get the '<expectval>'
    Examples: 
      | URL                           | expectval                                                                                                                                                           |
      | http://localhost:1111/addjobs | "Job added."   |