const styles = {
  container: {
    height: "100%",
    display: "flex",
    flexDirection: [" column"],
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    top: ["100px", "150px"],

    span: {
      background: "#E04C4C",
      color: "#FFF",
      padding: ["8px 19px"],
      boxShadow: "3px 4px 0px rgba(0,0,0,0.12)"
    },

    h1: {
      fontFamily: "Bangers",
      fontSize: ["42px", "58px", "58px", "58px", "68px"],

      letterSpacing: "0px",
      position: "relative",
      fontWeight: "lighter",
      lineHeight: ["54px", "82px"]
    },

    h2: {
      fontFamily: "Lobster, cursive",
      top: ["40px"],
      position: "relative",
      fontSize: ["22px", "22px", "16px", "19px"],
      fontWeight: "bold",
      color: "#504F50",
      mb: ["85px"]
    }
  },

  heroImage: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
};

export default styles;
