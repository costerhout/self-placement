/**
 * @Author: Colin Osterhout <ctosterhout>
 * @Date:   2020-04-09T07:11:59-08:00
 * @Email:  ctosterhout@alaska.edu
 * @Project: self-placement
 * @Last modified by:   ctosterhout
 * @Last modified time: 2020-04-09T10:51:46-08:00
 * @License: Released under MIT License. Copyright 2020 University of Alaska Southeast.  For more details, see https://opensource.org/licenses/MIT
 */

 const questions = [
   {
     id: '1',
     text: 'During the last two years, how often in school or at work did you write essays or reports that were longer than three pages?',
     answers: [
       {
         id: 'A',
         text: 'Never',
         value: 0
       },
       {
         id: 'B',
         text: 'Rarely (1–3 times)',
         value: 1
       },
       {
         id: 'C',
         text: 'Sometimes (4–5 times)',
         value: 2
       },
       {
         id: 'D',
         text: 'Often (more than 5 times)',
         value: 3
       }
     ]
   },
   {
     id: '2a',
     text: 'How often do you read books, articles, reports or other longer written materials, printed or online, in the English language?',
     answers: [
       {
         id: 'A',
         text: 'Rarely or never',
         value: 0
       },
       {
         id: 'B',
         text: 'A few times a year',
         value: 1
       },
       {
         id: 'C',
         text: 'A few times a month',
         value: 2
       },
       {
         id: 'D',
         text: 'A few times a week',
         value: 3
       }
     ]
   },
   {
     id: '2b',
     text: 'How do you feel about your ability to understand news articles, essays, or textbooks?',
     answers: [
       {
         id: 'A',
         text: 'I rarely feel like I understand the material fully.',
         value: 0
       },
       {
         id: 'B',
         text: 'I sometimes feel like I understand the material fully. However, I sometimes find it challenging to identify the main idea in a piece of WRTG or offer my own response',
         value: 1
       },
       {
         id: 'C',
         text: 'I usually feel like I understand the material fully',
         value: 2
       },
       {
         id: 'D',
         text: 'I almost always understand the material fully',
         value: 3
       }
     ]
   },
   {
     id: '3',
     text: 'When you need to write an essay, report, or other important document, how easy is it to organize your thoughts?',
     answers: [
       {
         id: 'A',
         text: 'I frequently struggle with organizing my thoughts when I try to write a document',
         value: 0
       },
       {
         id: 'B',
         text: 'I sometimes have trouble with organizing my thoughts when I try to write a document',
         value: 1
       },
       {
         id: 'C',
         text: 'I can usually figure out a good way to organize my thoughts when I try to write a document',
         value: 2
       },
       {
         id: 'D',
         text: 'I almost always organize my thoughts effectively',
         value: 3
       }
     ]
   },
   {
     id: '4',
     text: 'When you need to revise an essay, report, or other important document, how easy is it for you to fix the spelling, grammar, or punctuation, on your own?',
     answers: [
       {
         id: 'A',
         text: 'I don’t have much experience with this kind of WRTG',
         value: 0
       },
       {
         id: 'B',
         text: 'I frequently struggle with fixing spelling, grammar or punctuation mistakes in my WRTG',
         value: 1
       },
       {
         id: 'C',
         text: 'I can sometimes find spelling, grammar or punctuation mistakes on my own and correct them, but sometimes I can’t',
         value: 2
       },
       {
         id: 'D',
         text: 'I can usually find spelling, grammar or punctuation mistakes on my own and correct them',
         value: 3
       }
     ]
   },
   {
     id: '5',
     text: 'When you need to revise an essay, report, or other important document, how easy is it for you to make other changes, like improving the organization or adding details?',
     answers: [
       {
         id: 'A',
         text: 'I don’t have much experience with this kind of WRTG',
         value: 0
       },
       {
         id: 'B',
         text: 'I frequently struggle with making changes to my WRTG',
         value: 1
       },
       {
         id: 'C',
         text: 'I can sometimes figure out what changes are necessary, but sometimes I can’t',
         value: 2
       },
       {
         id: 'D',
         text: 'I can usually figure out what changes I need to make',
         value: 3
       }
     ]
   },
   {
     id: '6',
     text: 'How would you describe your time management skills, such as your ability to follow a schedule, make to-do lists, or use reminders, a calendar, or planner?',
     answers: [
       {
         id: 'A',
         text: 'I rarely make a plan or follow a schedule for completing my work',
         value: 0
       },
       {
         id: 'B',
         text: 'I sometimes make a plan or follow a schedule, but may miss assignments or deadlines',
         value: 1
       },
       {
         id: 'C',
         text: 'I usually make a plan or follow a schedule',
         value: 2
       },
       {
         id: 'D',
         text: 'I almost always make a plan or follow a schedule, and almost always complete my work on time',
         value: 3
       }
     ]
   },
   {
     id: '7',
     text: 'In WRTG courses, students are expected to do at least two hours of homework for every hour spent in class. For example, a WRTG 110 student would spend four hours per week in class, and eight additional hours per week on homework, for a total of 12 hours per week. How would you describe the other demands on your time, such as your job, family, classes, or other commitments?',
     answers: [
       {
         id: 'A',
         text: 'I have many other commitments, so I will not have much time for this much WRTG homework per week',
         value: 0
       },
       {
         id: 'B',
         text: 'I have some other commitments, so I will have only a little time for WRTG homework',
         value: 1
       },
       {
         id: 'C',
         text: 'I have a few other commitments, but I should still have enough time for this much WRTG homework',
         value: 2
       },
       {
         id: 'D',
         text: 'I do not have other commitments. I have plenty of time for this much WRTG homework.',
         value: 3
       }
     ]
   },
   {
     id: '9',
     text: 'In WRTG classes, students are expected to use a computer for some assignments. How comfortable are you using a computer to draft, revise, save, and print or share a written document?',
     answers: [
       {
         id: 'A',
         text: 'I am not comfortable using a computer in this way',
         value: 0
       },
       {
         id: 'B',
         text: 'I am somewhat comfortable using a computer in this way, but I will probably need some help',
         value: 1
       },
       {
         id: 'C',
         text: 'I am mostly comfortable using a computer in this way',
         value: 2
       },
       {
         id: 'D',
         text: 'I am very comfortable using a computer in this way',
         value: 3
       }
     ]
   },
   {
     id: '10a',
     text: 'In WRTG 111, students need the ability to stay focused on their work. How do you feel about your ability to concentrate and avoid distractions in and out of class?',
     answers: [
       {
         id: 'A',
         text: 'I often have trouble staying focused on my work',
         value: 0
       },
       {
         id: 'B',
         text: 'Sometimes I stay focused for a while, but sometimes I get distracted or have trouble concentrating',
         value: 1
       },
       {
         id: 'C',
         text: 'I can usually stay focused on my work',
         value: 2
       },
       {
         id: 'D',
         text: 'I rarely have trouble staying focused on my work',
         value: 3
       }
     ]
   },
   {
     id: '10b',
     text: 'In WRTG 111, students may need to work closely with others, such as their peers, their professors, a WRTG center tutor, or other services to make their WRTG the best it can be. How comfortable are you with asking others for help?',
     answers: [
       {
         id: 'A',
         text: 'I have a hard time asking anyone for help',
         value: 0
       },
       {
         id: 'B',
         text: 'It is difficult for me to ask most people for help, but I can usually find one or two people to help me if needed',
         value: 1
       },
       {
         id: 'C',
         text: 'I am usually comfortable asking my professor and others for help',
         value: 2
       },
       {
         id: 'D',
         text: 'I am very comfortable asking my professor for help',
         value: 3
       }
     ]
   }
 ]

 export default questions
