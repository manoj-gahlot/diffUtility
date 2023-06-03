function diffUtility(response1, response2) {
    const lines1 = response1.split(/\r?\n/).filter(line => line.trim() != '');
    const lines2 = response2.split(/\r?\n/).filter(line => line.trim() != '');
    const m = lines1.length, n = lines2.length;
    const dp = Array.from(Array(m + 1), () => Array(n + 1).fill(0));

    // Compute the lengths of LCS
    for (let i = 1; i <= m; ++i) {
        for (let j = 1; j <= n; ++j) {
            if (lines1[i - 1] === lines2[j - 1])
                dp[i][j] = dp[i - 1][j - 1] + 1;
            else
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
        }
    }

    // Construct the LCS string
    let lcs = [];
    let i = m, j = n;
    while (i > 0 && j > 0) {
        if (lines1[i - 1] === lines2[j - 1]) {
            lcs.push(lines1[i - 1]);
            --i;
            --j;
        }
        else if (dp[i - 1][j] > dp[i][j - 1])
            --i;
        else
            --j;
    }
    lcs.reverse();
    console.log(lcs);
    // return lcs;
    i = 0, j = 0;
    let diff = [];
    lcs.forEach(function (line) {
        while (lines1[i] != line) {
            diff.push('- ' + lines1[i]);
            i++;
        }
        while (lines2[j] != line) {
            diff.push('+ ' + lines2[j]);
            j++;
        }
        diff.push(line);
        i++;
        j++;
    });
    console.log("diff is");
    console.log(diff);



    // console.log(lines1);
    // console.log(lines2);
    return diff;
}
module.exports = diffUtility;