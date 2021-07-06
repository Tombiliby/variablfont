
export const addFont = (name, fileNameWithExt) => {
  const font = new FontFace(name, `url(./fonts/${fileNameWithExt})`, {});

  font.load().then(function (loaded_face) {
    document.fonts.add(loaded_face)
    //fontLoading()
    //document.body.style.fontFamily = `${name}, monospace`;
  }).catch(function (error) {
    if (error) {
      console.log(error)
    }
  });

}

export const fontLoading = () => {
  document.fonts.ready.then(function (font_face_set) {
    console.log("%c All font is loaded ", 'background: #d8ffdf; color: #00b622')
    return "All fonts loaded"
  });
  return "loading font"
}


//addFont("Dancing Script", "DancingScript-VariableFont_wght.ttf ")