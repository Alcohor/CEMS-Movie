function getPath($obj) {
    const oFReader = new FileReader();
    const file = $obj.get(0).files[0];
    oFReader.readAsDataURL(file);
    return oFReader.onloadend = function (oFRevent) {
        return _src = oFRevent.target.result;
    }
}

export default getPath