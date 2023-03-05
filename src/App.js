import React from "react";
import pageMetaScraper from "page-meta-scraper";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.website = React.createRef();
  }

  render() {
    var height =
        this.state.website || (this.state.sites && this.state.sites.length > 0)
          ? "0px"
          : "min-content",
      space = " ";
    console.log(this.state.open);
    return (
      <div className="App">
        <h5 style={{ position: "fixed", bottom: "0px" }}>
          <a href="https://hibit.cc" style={{ color: "white" }}>
            try
          </a>
          {space}keybox.email kyc confidential computing
        </h5>
        <h1
          style={{
            height,
            transition: ".3s ease-in"
          }}
        >
          Browser Glass
        </h1>
        <h4
          style={{
            marginBottom: "10px",
            height,
            transition: ".3s ease-in"
          }}
        >
          search
        </h4>
        <h5 style={{ color: "lightgreen" }}>
          [Your device (Android or Apple) WebKit{space}
          <a
            style={{ color: "lightskyblue" }}
            href="https://doc.rust-lang.org/std/keyword.impl.html"
          >
            implementation
          </a>
          {space}is closed source]
        </h5>
        <form
          style={{
            height,
            transition: ".3s ease-in"
          }}
          onSubmit={async (e) => {
            e.preventDefault();
            const { search } = this.state;
            var arr = search.split(".");
            if (search.includes(".") && arr) {
              if (arr.length < 4) {
                var suffix = arr[arr.length - 1];
                if (this.props.tlds.includes(suffix.toUpperCase())) {
                  const alertError = (entry) => {
                    window.alert(
                      entry + " is more than letters, numbers or hyphen"
                    );
                  };
                  //tld recognized
                  var website = "";
                  var withoutSuffix = arr.slice(-1);
                  let good = 0;
                  withoutSuffix.map((entry) => {
                    if (/[a-zA-Z0-9-]/g.test(entry)) {
                      return good++;
                    } else return alertError(entry);
                  });
                  if (good === withoutSuffix.length) {
                    if (arr[0].includes("https://")) {
                      //https:// already entered
                      website = search;
                    } else {
                      website = "https://" + search;
                    }
                    var answer = window.confirm("navigate to " + website + "?");
                    if (answer) {
                      const metadata = await pageMetaScraper.scrape(website);
                      if (metadata) {
                        this.setState({ website, metadata });
                        console.log(metadata);
                      }
                      //connot even get metadata from another origin
                      //must use node
                    }
                  }
                } else
                  window.alert(
                    suffix +
                      " is not a registered domain suffix.  email nick@carducci.sh with requests"
                  );
              } else
                window.alert(
                  "we only support the subdomain level sub.domain.top.  email nick@carducci.sh with requests"
                );
            } else {
              //term
              /*
              firebase
                .firestore()
                .collection("sites")
                .where("metaAsArray", "array-contains", search)
                .get()
                .then((querySnapshot) => {
                  let sites = [];
                  let p = 0;
                  querySnapshot.docs.forEach((doc) => {
                    p++;
                    if (doc.exists) {
                      var foo = doc.data();
                      foo.id = doc.id;
                      sites.push(foo);
                    }
                    if (querySnapshot.docs.length === p) {
                      this.setState({ sites });
                    }
                  });
                });*/
            }
          }}
        >
          <input
            placeholder="domain or meta term"
            style={{
              textAlign: "center",
              width: "90%",
              maxWidth: "500px",
              height: "33px"
            }}
            onChange={(e) => this.setState({ search: e.target.value })}
          />
        </form>
        {this.state.sites && (
          <div
            style={{ position: "relative", width: "100%", height: "100%" }}
          ></div>
        )}
        {this.state.website && (
          <iframe
            ref={this.website}
            title={this.state.website}
            src={
              this.state.website
            } /*.querySelector(
                  'meta[name="description"]'
                ).content;* //.getElementsByTagName('meta')

              console.log(content);
            }}*/
            /*onLoad={() => {
              var content =
                this.website.current &&
                this.website.current
                  .contentType; /*.contentWindow.document.body
                  .innerHTML;*/
          />
        )}
        <h5 style={{ color: this.state.vpn ? "lightskyblue" : "grey" }}>
          <span style={{ color: "lightskyblue" }}>SameSite</span>
          {space}(and) VPN{space}
          <input
            type="checkbox"
            onChange={(e) => this.setState({ open: e.target.checked })}
          />
        </h5>
      </div>
    );
  }
}
export default App;
