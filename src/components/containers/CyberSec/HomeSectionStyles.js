const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: ['column', 'column', 'column', 'row'],
        height: '100vh',
        // mt: ['200px', '200px', '200px', '200px', null],
    },


    leftContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        flex: 2,

        h1: {
            fontFamily: 'Bangers',
            textAlign: 'left',
            lineHeight: ['48px'],
            fontSize: ['44px'],
            fontWeight: 'lighter'
            
        },

        p: {
            fontFamily: 'Merriweather',
            fontSize: ['14px'],
            mb: ['40px'],
            textAlign: 'left',
            mt: ['35px']
        }
    },

    rightContainer: {
        display: 'flex',
        flex:2,
    }
}







export default styles;