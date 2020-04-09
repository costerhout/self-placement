/**
 * @Author: Colin Osterhout <ctosterhout>
 * @Date:   2020-04-09T08:58:13-08:00
 * @Email:  ctosterhout@alaska.edu
 * @Project: self-placement
 * @Last modified by:   ctosterhout
 * @Last modified time: 2020-04-09T10:51:33-08:00
 * @License: Released under MIT License. Copyright 2020 University of Alaska Southeast.  For more details, see https://opensource.org/licenses/MIT
 */

const questions = [
   {
     id: '11',
     text: 'How challenging was it for you to read and understand this text?',
     answers: [
       {
         id: 'A',
         text: 'Very challenging',
         value: 0
       },
       {
         id: 'B',
         text: 'Moderately challenging',
         value: 1
       },
       {
         id: 'C',
         text: 'A little challenging',
         value: 2
       },
       {
         id: 'D',
         text: 'Not very challenging at all',
         value: 3
       }
     ]
   },
   {
     id: '12',
     text: 'Please take a look at the following discussion questions, which you would need to answer in a WRTG 111 class',
     answers: [
       {
         id: 'A',
         text: 'Very challenging',
         value: 0
       },
       {
         id: 'B',
         text: 'Moderately challenging',
         value: 1
       },
       {
         id: 'C',
         text: 'A little challenging',
         value: 2
       },
       {
         id: 'D',
         text: 'Not very challenging at all',
         value: 3
       }
     ]
   },
   {
     id: '13',
     text: 'Please take a look at the following discussion questions, which you would need to answer in a WRTG 111 class: "What are the main ideas of the text?", "Choose one important quote from the text. What do you think it means?", and "How did you react to the text? What did it make you think about from your own life?". How challenging would it be to answer questions like these?',
     answers: [
       {
         id: 'A',
         text: 'Very challenging',
         value: 0
       },
       {
         id: 'B',
         text: 'Moderately challenging',
         value: 1
       },
       {
         id: 'C',
         text: 'A little challenging',
         value: 2
       },
       {
         id: 'D',
         text: 'Not very challenging at all',
         value: 3
       }
     ]
   }
 ]

 export default questions
