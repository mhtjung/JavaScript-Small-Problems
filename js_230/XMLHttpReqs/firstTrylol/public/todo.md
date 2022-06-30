Todo:

1. When a form is submitted, check to see how many forms there are

Data to send to the server will alway be an object with an array assigned the schedules property
{
 "schedules": {
   {
     id
     date
     time
   },
   {
     id
     date
     time
   }
 } 
}
2. If there's just one, serialize the data by extracting the value from each fields and placing into a JSON object

3. If there's more than one, assemble an array 