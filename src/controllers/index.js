class MainController {
    static getHomePage(req, res) {
        res.sendFile('index.html', { root: './src/views' });
    }
}

export default MainController;