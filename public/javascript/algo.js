function diffUtility(oldCode, newCode) {
    const oldLines = oldCode.split(/\r?\n/).filter(line => line.trim() !== '');
    const newLines = newCode.split(/\r?\n/).filter(line => line.trim() !== '');
    
    const diff = [];
  
    let i = 0;
    let j = 0;
  
    while (i < oldLines.length || j < newLines.length) {
      const oldLine = oldLines[i];
      const newLine = newLines[j];
  
      if (oldLine === newLine) {
        diff.push("  " + oldLine); // Unchanged line
        i++;
        j++;
      } else {
        const oldIsComment = isComment(oldLine);
        const newIsComment = isComment(newLine);
  
        if (oldIsComment && newIsComment) {
          // Both lines are comments
          diff.push("  " + oldLine); // Unchanged comment
          i++;
          j++;
        } else if (oldLine && !newLine) {
          diff.push("- " + oldLine); // Deleted line
          i++;
        } else if (!oldLine && newLine) {
          diff.push("+ " + newLine); // Inserted line
          j++;
        } else {
          // Modified line or comment
          diff.push("- " + oldLine); // Delete old line
          diff.push("+ " + newLine); // Insert new line
          i++;
          j++;
        }
      }
    }
  
    return diff;
  }
  
  function isComment(line) {
    // Regular expression to detect single-line or multiline comments
    const commentRegex = /^\s*(\/\/.*)?$|^\s*\/\*.*\*\/\s*$/;
    return commentRegex.test(line);
  }
  
  module.exports = diffUtility;



//   // Test case with advanced code examples
//   const oldCode = `
//   var x = 10;
  
//   // This is a single-line comment
  
//   /*
//     This is a multiline comment
//     spanning multiple lines.
//   */
  
//   function sum(a, b) {
//     return a + b;
//   }
  
//   // Another comment
//   `;
  
//   const newCode = `
//   let y = 20;
  
//   /*
//     This is a multiline comment
//     spanning multiple lines.
//   */
  
//   function multiply(a, b) {
//     return a * b;
//   }
//   `;
  
//   const differences = diffUtility(oldCode, newCode);
  
//   console.log("Code Differences:");
//   console.log("-----------------");
//   console.log(differences.join("\n"));
  



// // function algorithm(response1, response2) {
// //     // Remove all type of comments comments
// //     response1 = response1.replace(/\/\*[\s\S]*?\*\//g, '');
// //     response2 = response2.replace(/\/\*[\s\S]*?\*\//g, '');
// //     response1 = response1.replace(/\/\/.*/g, '');
// //     response2 = response2.replace(/\/\/.*/g, '');

// //     // Split the string into lines
// //     const lines1 = response1.split(/[\n\r]/);
// //     const lines2 = response2.split(/[\n\r]/);

// //     const i = 0, j = 0;
// //     const diff = [];
// //     while (i < lines1.length || j < lines2.length) {
// //         line1 = lines1[i];
// //         line2 = lines2[j];
// //         if (line1 === line2) {
// //             diff.push(line1);
// //             i++;
// //             j++;
// //         }
// //         else if (line1 && !line2) {
// //             diff.push("+ " + line1);
// //             j++;
// //         }
// //         else if (line2 && !line1) {
// //             diff.push("-  " + line2);
// //         }
// //     }
// //     // console.log(lines1);
// //     // console.log(lines2);

// //     return diff;
// //     // console.log(lines1);
// //     // console.log('\n');
// //     // console.log(lines2);
// // }
// // module.exports = algorithm;




