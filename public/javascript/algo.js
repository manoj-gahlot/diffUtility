function diffUtility(response1, response2) {
    const lines1 = response1.split(/\r?\n/).filter(line => line.trim() != '');
    const lines2 = response2.split(/\r?\n/).filter(line => line.trim() != '');




    console.log(lines1);
    console.log(lines2);
    return ['hello'];
}
module.exports = diffUtility;