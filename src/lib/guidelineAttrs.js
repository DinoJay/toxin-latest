const nonOECD = [
    'homogeneity',
    'ph',
    'composition',
    'purity',
    'solubility_in_vehicle',
    'treatment_prior_to_application',
    'chemical_batch_nr',
    'additional_information',
    'additional_info',
    'deviation_from_guideline',
    'year',
    'glp',
    'scss_comment_to_test',
    'ref_in_dossier',
    'own_comments',
    'concentration',
    'source',
    'conclusion',
    'species_strain',
    'age_at_start_of_experiment',
    'sex',
    'feed',
    'n_animals_group',
    'dose_levels',
    'volume',
    'vehicle',
    'control_group',
    'histopathological observations',
    'first grading',
    'second grading',
    'rechallenge grading',
    'outcome of test',
    'intradermal injections',
    'injection vehicle',
    'patch site preparation',
    'filter paper material and size',
    'induction of local irriation',
    'duration of application',
    "application area",
    'occlusion',
    'testing procedure',
    'scoring times'
]

function getAttrs(guide, obj) {
    // return obj

    if (guide === 'non OECD') {
        const retObj = {}
        nonOECD.forEach(o => { retObj[o] = obj[o] })
        return { ...obj, ...retObj, }
    }
    return obj
}
export { getAttrs }