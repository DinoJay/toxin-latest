export default (d) => {
    const ret = {};
    Object.keys(d).map((k) => (ret[k] = d[k].value));
    return ret;
}