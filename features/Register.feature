Feature: <Feature Name>
This is a restful api service test project.
You can use json-mock as an api server. Before runing the script, please init the mock message and start the json-mock server. It can be found in your project's node_modules folder. 
Steps:
1. in command prompt, browse to your project folder,
2. run the following command:
    node_modules\.bin\json-mock.cmd data.json

  

  Scenario Outline: Post data
    * Post to service api "<URL>" with '<data>' and I should get the '<expectval>'
    Examples: 
      | URL                         | data                                            | expectval                                       |
      | http://localhost:1111/register | { "Firstname": "Yumas","Lastname":"asd","Username":"He","Email":"asdf@gmal.com","Address":"12","Phone":"11234","Password":"s","Confpassword":"s" } | "Registered" |