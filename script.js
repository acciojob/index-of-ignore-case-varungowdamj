function indexOfIgnoreCase(s1, s2) {
            // Convert both strings to lower case to perform a case-insensitive search
            let lowerS1 = s1.toLowerCase();
            let lowerS2 = s2.toLowerCase();

            // Use the built-in indexOf method to find the index of the substring
            return lowerS1.indexOf(lowerS2);
        }

        const s1 = prompt("Enter s1:");
        const s2 = prompt("Enter s2:");
        alert(indexOfIgnoreCase(s1, s2));