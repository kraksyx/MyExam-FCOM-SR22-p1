const questions = [
    {
        question: "1. During CAPS deployment, what position should the door be in?",
        options: [
            "Open and latched",
            "Open and unlatched",
            "Closed and latched",
            "Closed and unlatched"
        ],
        correct: 2
    },
    {
        question: "2. What should your descent rate be above 1000 ft?",
        options: [
            "2000 ft/min",
            "500 ft/min",
            "1000 ft/min",
            "1500 ft/min"
        ],
        correct: 3
    },
    {
        question: "3. During preflight inspection, the bolt under the inboard edge of the aileron should be secured with what?",
        options: [
            "A clip",
            "Safety wire",
            "A nut and bolt",
            "A locking pin"
        ],
        correct: 1
    },
    {
        question: "4. During navigation briefing, what does the top of the lower green arc represent?",
        options: [
            "Best performance",
            "Best power",
            "Maximum speed",
            "Best economy"
        ],
        correct: 3
    },
    {
        question: "5. During navigation briefing, what does the bottom of the top green arc represent?",
        options: [
            "Minimum speed",
            "Best performance or best power",
            "Best economy",
            "Maximum endurance"
        ],
        correct: 1
    },
    {
        question: "6. When should the RAIM check be done?",
        options: [
            "After landing",
            "After the RNAV approach",
            "During the RNAV approach",
            "Before the RNAV approach"
        ],
        correct: 3
    },
    {
        question: "7. If a terrain caution occurs under daylight in positive verification that no obstacle terrain exists, the alert may be regarded as cautionary, and flight approach may be continued. Is this statement true or false?",
        options: [
            "Only true in IFR conditions",
            "Only true at night",
            "False",
            "True"
        ],
        correct: 3
    },
    {
        question: "8. What are two methods to regain track during VFR navigation?",
        options: [
            "Single track error and heading adjustment",
            "Double track error and correction angle",
            "Track alignment and altitude change",
            "Course deviation and speed adjustment"
        ],
        correct: 1
    },
    {
        question: "9. Should landing lights be switched off during stopping?",
        options: [
            "False",
            "Only at night",
            "True",
            "Only in IFR conditions"
        ],
        correct: 2
    },
    {
        question: "10. Which lights should be turned off after coming to a stop after taxiing?",
        options: [
            "Landing lights",
            "Navigation lights",
            "Taxi lights",
            "Strobe lights"
        ],
        correct: 0
    },
    {
        question: "11. After starting, if the oil gauge does not begin to show pressure within 30 seconds in warm and 60 seconds in cold, what should you do?",
        options: [
            "Stop",
            "Increase engine power",
            "Check the fuel system",
            "Continue the flight"
        ],
        correct: 0
    },
    {
        question: "12. What is the minimum caution range for fuel in gallons (Appendix)?",
        options: [
            "15–25 gallons",
            "0–14 gallons",
            "0–10 gallons",
            "10–20 gallons"
        ],
        correct: 1
    },
    {
        question: "13. What does AGRPA stand for?",
        options: [
            "Altitude, G1000, Radio Aids, Performance App briefing",
            "ATIS, G1000, Radio Aids, Power adjustment",
            "ATIS, G1000, Radio Aids, Performance App briefing",
            "Approach, G1000, Radio Aids, Performance App briefing"
        ],
        correct: 2
    },
    {
        question: "14. If you suspect the ELT may be active after a hard landing, what should you do?",
        options: [
            "Ignore it",
            "Contact maintenance immediately",
            "Reset it",
            "Turn off the ELT power"
        ],
        correct: 2
    },
    {
        question: "15. What are the modes on the FMA while flying an ILS approach?",
        options: [
            "VOR and glide slope",
            "NAV and altitude",
            "LOC and glide slope (localizer)",
            "HDG and vertical speed"
        ],
        correct: 2
    },
    {
        question: "16. During preflight, what should you do with the prop?",
        options: [
            "Check the prop by moving it",
            "Ignore the prop",
            "Spin the prop manually",
            "Check the prop without moving it"
        ],
        correct: 3
    },
    {
        question: "17. During power-up flow, what should the transponder be set to?",
        options: [
            "2000 standby",
            "1000 standby",
            "2000 on",
            "1000 on"
        ],
        correct: 0
    },
    {
        question: "18. What is the answer to the C2 question?",
        options: [
            "Shortest answer",
            "Longest answer",
            "Medium answer",
            "No answer"
        ],
        correct: 1
    },
    {
        question: "19. During preflight, how do you test the stall warning?",
        options: [
            "Avionics should be off",
            "BAT 2, BAT 1, and avionics should be on",
            "BAT 1 and avionics should be on",
            "BAT 1 and BAT 2 should be off"
        ],
        correct: 1
    },
    {
        question: "20. How do you know the fuel quantity needed to be added?",
        options: [
            "Refer to the flight manual",
            "Check the fuel logs",
            "Use the fuel gauge",
            "Estimate based on flight time"
        ],
        correct: 2
    },
    {
        question: "21. What should the transponder be set to prior to shutdown?",
        options: [
            "1000 on",
            "1000 standby",
            "2000 on",
            "2000 standby"
        ],
        correct: 3
    },
    {
        question: "22. When should you turn on BAT 1?",
        options: [
            "After landing",
            "After external bus and flaps are checked",
            "Before takeoff",
            "During taxi"
        ],
        correct: 1
    },
    {
        question: "23. When do we remove the mobile AC?",
        options: [
            "After takeoff",
            "Before start flow down to the line",
            "After start flow",
            "During taxi"
        ],
        correct: 1
    },
    {
        question: "24. What should the speed be increased for flaps 50 approach?",
        options: [
            "120 KIAS",
            "90 KIAS",
            "100 KIAS",
            "80 KIAS"
        ],
        correct: 1
    },
    {
        question: "25. What is the definition of an uncertain position?",
        options: [
            "1 point missed",
            "2 points missed",
            "3 points missed",
            "4 points missed"
        ],
        correct: 1
    },
    {
        question: "26. What is the definition of a lost position?",
        options: [
            "4 points missed",
            "2 points missed",
            "3 points missed",
            "1 point missed"
        ],
        correct: 2
    },
    {
        question: "27. When should pitot heat be turned on?",
        options: [
            "At night only",
            "In visible moisture and temperature below 5°C",
            "During takeoff",
            "In clear weather"
        ],
        correct: 1
    },
    {
        question: "28. Before start, below the line, if pushback is required, what should be set?",
        options: [
            "Transponder ON",
            "Transponder ALT",
            "Transponder STANDBY",
            "Transponder OFF"
        ],
        correct: 1
    },
    {
        question: "29. What procedures can be found in the section?",
        options: [
            "Emergencies, navigation, flows",
            "Flows, maneuvers, emergencies",
            "Checklists, flows, maneuvers",
            "Maneuvers, navigation, checklists"
        ],
        correct: 1
    },
    {
        question: "30. What should you do by memory?",
        options: [
            "Contact ATC",
            "Use the checklist",
            "Follow the QRH",
            "Perform memory items"
        ],
        correct: 3
    },
    {
        question: "31. What should you do with the checklist or flows?",
        options: [
            "Skip and verify",
            "Do and verify",
            "Do and ignore",
            "Verify and skip"
        ],
        correct: 1
    },
    {
        question: "32. What should you do if the checklist is interrupted?",
        options: [
            "Start again",
            "Ignore the interruption",
            "Skip the checklist",
            "Continue where you left off"
        ],
        correct: 0
    },
    {
        question: "33. What is the maximum rate of climb?",
        options: [
            "120 KIAS at all altitudes",
            "90 KIAS below 10,000 ft, 80 KIAS above 10,000 ft",
            "108 KIAS below 10,000 ft, 99 KIAS above 10,000 ft",
            "100 KIAS below 10,000 ft, 90 KIAS above 10,000 ft"
        ],
        correct: 2
    },
    {
        question: "34. What is the normal cruise power setting?",
        options: [
            "55% to 85%",
            "85% to 95%",
            "65% to 75%",
            "50% to 65%"
        ],
        correct: 0
    },
    {
        question: "35. What is the best economy power setting?",
        options: [
            "85%",
            "55%",
            "75%",
            "65%"
        ],
        correct: 3
    },
    {
        question: "36. What is the best power setting?",
        options: [
            "85%",
            "75%",
            "55%",
            "65%"
        ],
        correct: 1
    },
    {
        question: "37. What is the best holding speed?",
        options: [
            "90 KIAS",
            "130 KIAS",
            "120 KIAS",
            "100 KIAS"
        ],
        correct: 2
    },
    {
        question: "38. At what altitude should the autopilot be disengaged?",
        options: [
            "1000 ft",
            "200 ft",
            "600 ft",
            "400 ft"
        ],
        correct: 3
    },
    {
        question: "39. At what altitude should the yaw damper be disengaged?",
        options: [
            "1000 ft",
            "200 ft",
            "600 ft",
            "400 ft"
        ],
        correct: 1
    },
    {
        question: "40. At what altitude should the autopilot be engaged for IFR departure laterally?",
        options: [
            "600 ft AGL",
            "200 ft AGL",
            "400 ft AGL",
            "1000 ft AGL"
        ],
        correct: 2
    },
    {
        question: "41. In case of a go-around, at what altitude should the autopilot be engaged?",
        options: [
            "400 ft",
            "1000 ft",
            "800 ft",
            "600 ft"
        ],
        correct: 1
    },
    {
        question: "42. What should the descent rate be below 1000 ft?",
        options: [
            "500 ft/min",
            "2000 ft/min",
            "1000 ft/min",
            "1500 ft/min"
        ],
        correct: 2
    }
];
