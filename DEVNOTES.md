# Initial module startup
All modules should have a load function.  
This function can do whatever you want but usually checks for database, files, etc...  
Returns __true__ if it's okay, else stops the program for running