export const trending = (req, res) => res.send("Home Page videos");
export const see = (req, res) => {
    console.log(req.params)
    res.send("Watch");
}
export const edit = (req, res) => {
    console.log(req.params)
    res.send("Edit")
}
export const search = (req, res) => res.send("search");
export const upload = (req, res) => res.send("upload");
export const deleteVideo = (req, res) => {
    console.log(req.params)
    res.send("Delete Video")
}