function klimischScore(study) {
    let totalScore = 0;
    let metricsCount = 0;

    if (study.id === 'http://toxin.vub.be/resource/test/repeated-dose-toxicity/non_oecd/30')
        console.log('study', study);

    //Q1
    totalScore += 1;

    //Q2
    if (!isNaN(study.test_method_test_substance_purity)) {
        totalScore += 1

    }

    //Q3 
    if (study.test_method_test_substance_chemical_batch_nr)
        totalScore += 1;


    //Q4
    if (study.endpoint === 'repeated-toxicity') {
        if (!['OECD 412', 'OECD 413', 'OECD 422'].includes(study.guidelineLabel))
            totalScore += 1;

        if (study.guidelineLabel === 'OECD 412' || study.guidelineLabel === 'OECD 413' || study.guidelineLabel === 'OECD 412') {
            null
        }


        // Return the average score, rounded to nearest integer
        return Math.round(totalScore / metricsCount);
    }
}