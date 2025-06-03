export const trending = (req, res) => {
    const fakeUser = {
        username:"sungmin",
        loggedIn: false,
    }

    return res.render("home", {pageTitle: "Home", fakeUser});
}
export const see = (req, res) => res.render("watch", {pageTitle: "Home", fakeUser});
export const edit = (req, res) => res.render("edit", {pageTitle: "Home", fakeUser});
export const search = (req, res) => res.send("search");
export const upload = (req, res) => res.send("upload");
export const deleteVideo = (req, res) => {
    return res.send("Delete Video")
}

// fakeuser를 전역 상수로 놓아야 할 듯..