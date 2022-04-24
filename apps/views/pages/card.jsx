import {
  CardBackgroundColour,
  CardBody,
  CardBorder,
  CardExample,
  CardHeaderFooter,
  CardHorizontal,
  CardImage,
  CardImageOverlay,
  CardKitchenSink,
  CardLinks,
  CardListGroups,
  CardNavItems,
  CardTextAlignment,
} from "kbs-core";

export function CardPage() {
  return (
    <div className="container mt-5">
      <h1>Example</h1>
      <CardExample
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiWcssQ21_WFH4Hg9udn_tOc9hHT931VZDNFNQ0Z0Xeri8kV4dlvhWqdVja9ID2P-9Kf8&usqp=CAUs"
        alt="image cap"
        title="Card title"
        text="Some quick example text to build on the card title and make up the bulk of the card's content."
        button="Go somewhere"
      />
      <hr />
      <h1>Body</h1>
      <CardBody text="Card body text" />
      <hr />
      <h2>Titles , texts and links</h2>
      <CardLinks
        title="Card title"
        subtitle="Card subtitle"
        text="Some quick example text to build on the card title and make up the bulk of the card's content."
        link="Card link"
        link2="Another link"
      />
      <hr />
      <h2>Image</h2>
      <CardImage
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiWcssQ21_WFH4Hg9udn_tOc9hHT931VZDNFNQ0Z0Xeri8kV4dlvhWqdVja9ID2P-9Kf8&usqp=CAUs"
        alt="image cap"
        text="Some quick example text to build on the card title and make up the bulk of the card's content."
      />
      <hr />
      <h2>List groups</h2>
      <CardListGroups
        list1="An item"
        list2="A second item"
        list3="A third item"
      />
      <CardListGroups
        cardHeader="card-header"
        header="Card header"
        list1="An item"
        list2="A second item"
        list3="A third item"
      />
      <CardListGroups
        list1="An item"
        list2="A second item"
        list3="A third item"
        cardFooter="card-footer"
        footer="Card footer"
      />
      <hr />
      <h2>Kitchen sink </h2>
      <CardKitchenSink
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiWcssQ21_WFH4Hg9udn_tOc9hHT931VZDNFNQ0Z0Xeri8kV4dlvhWqdVja9ID2P-9Kf8&usqp=CAUs"
        alt="image cap"
        title="Card title"
        text="Some quick example text to build on the card title and make up the bulk of the card's content."
        list1="An item"
        list2="A second item"
        list3="A third item"
        link="Card link"
        link2="Another link"
      />
      <hr />
      <h2>Header and footer</h2>
      <div className="d-flex">
        <CardHeaderFooter
          cardClass="card col-sm-6 mx-2"
          cardHeader="card-header"
          header="Card header"
          title="Card title"
          text="Some quick example text to build on the card title and make up the bulk of the card's content."
          button="Go somewhere"
        />
        <CardHeaderFooter
          cardClass="card  text-center col-sm-6 mx-2 "
          title="Special title treatment"
          text="Some quick example text to build on the card title and make up the bulk of the card's content."
          button="Go somewhere"
          cardFooter="card-footer text-muted"
          footer="Card footer"
        />
      </div>
      <hr />
      <h2>Text alignment</h2>
      <div className="d-flex">
        <CardTextAlignment
          cardClass="card col mx-2"
          title="Card title"
          text="Some quick example text to build on the card title and make up the bulk of the card's content."
          button="Go somewhere"
        />
        <CardTextAlignment
          cardClass="card  text-center col mx-2"
          title="Special title treatment"
          text="Some quick example text to build on the card title and make up the bulk of the card's content."
          button="Go somewhere"
        />
        <CardTextAlignment
          cardClass="card  text-end col mx-2"
          title="Card title"
          text="Some quick example text to
        build on the card title and make up the bulk of the card's content."
          button="Go somewhere"
        />
      </div>
      <hr />
      <h2>Navigation</h2>
      <CardNavItems
        card="card col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-3"
        cardHeader="card-header"
        nav="nav nav-tabs card-header-tabs"
        li="Home"
        li2="Profile"
        li3="Message"
        cardBody="card-body"
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiWcssQ21_WFH4Hg9udn_tOc9hHT931VZDNFNQ0Z0Xeri8kV4dlvhWqdVja9ID2P-9Kf8&usqp=CAUs"
        alt="image"
        cardTitle="card-title"
        title="Download Free Songs For lpod"
        cardText="card-text"
        text="Topping sweet roll candy bonbon cookie oat cake bonbon oat cake. Gingerbread sweet icing marshmallow oat cake pastry chupa chups dragee.Icing sugar plum sugar plum. Candy canes water marshmallow sugar plum macaroon.Sesame snaps liquorice dragee."
      />
      <CardNavItems
        card="card col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-3"
        cardheader="card-header"
        nav="nav nav-pills card-header-pills"
        li="Home"
        li2="Profile"
        li3="Message"
        cardbody="card-body"
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiWcssQ21_WFH4Hg9udn_tOc9hHT931VZDNFNQ0Z0Xeri8kV4dlvhWqdVja9ID2P-9Kf8&usqp=CAUs"
        alt="image"
        cardtitle="card-title"
        title="Party Jokes Startling But Unnecessary"
        cardtext="card-text"
        text="Topping sweet roll candy bonbon cookie oat cake bonbon oat cake. Gingerbread sweet icing marshmallow oat cake pastry chupa chups dragee.Icing sugar plum sugar plum. Candy canes water marshmallow sugar plum macaroon.Sesame snaps liquorice dragee."
      />
      <hr />
      <h2>Image overlays</h2>
      <CardImageOverlay
        image="https://www.computerhope.com/jargon/s/silver.jpg"
        alt="image"
        cardOverlay="card-img-overlay"
        title="Card title"
        text="Some quick example text to build on the card title and make up the bulk of the card's content."
      />
      <hr />
      <h2>Horizontal</h2>
      <CardHorizontal
        card="card col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-3"
        img="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAMFBMVEXk5ueutLepr7Lc3+Dn6erg4uO3vL/X2tvHy83Q09WzuLvr7e7Axce9wsTU19m6v8JF5F41AAADRUlEQVR4nO2a25rjIAiAPWCi5vT+bztJ02633WxEEnAu+O/mav4PKVHAGEVRFEVRFEVRFEVRFMUYGMAE70MwAK1ddgBCGpcub3RLnE1zLwAfs3P2D865JYWmXtAv9i+jF3lsp7UqHRjt8WqkBSYeG+1aOTWwAp//E6aX1hTEndKp0Y6XDRak8zA96SWtIKKcRGOFjNPDSsxpxiqtiGV7hZNdhJyWGikXJdKqIqF2K5Fkr3OytuNXgrFWys3sUr5SaWNgdqoP1BYq7qyqd2IvC7U/vSfMdb2jOLmR9fwoab7Bmuq007OO8wsIEzFSnHfjgehkWZOKdnq8RaGnSmW+pEK9Fo5hlDp76Z3DVz7pUq5XKZW6V4oz0eklgVGqpzoxFk8TqBWd80UzUKVGTinSxXOF85mMbgF94VgbVcRrguN9Y9HOb2KVgpEUKOaHO6kocLc4hkyQYm9REYq6Y1YyhFRnfh9vQHVV4PzuvRiqWp5roESGNKEu1zvultkDmKsOUKi9P1R083i/eh+g+xwyXfQnyLog6oSdOvBXqC+rcl7JFIMPys+tBlNkmE+HyK4THtY+rczZ5arFsP3B4Ed3FC1nY8slDggxf+1wONuldkJPLdPHaVtx2bFT8r9kNQiCn1NKs18df4kRDG+gcZi2fx98n2KclrxfZ3I3jXENWDBN1rtg2HJpyY9s+sjzx9+r3Jpbg6AYGJ9Ge1gMPu2W5INIxGDoY3e0yXUoZrtx5o7XGqOIFXpHbOoZSylAQsfo0ytHpkoBPpbS6CxcY39/dm3LbmSlnenm6/r6iaNH6R2u5U4tSIX9OzTjXbkFfXeT0lYj7rlnXRgzHLJcrw/Fzcl6Lm+ZXBh8nHDt5UVtURdw3YXuEHkNoQw9sRAPTjLUkkXpuaIhtmPuq07HEKyAOhtCU7+Vw/S7+6C2QyvhtN7kqw4QvIRTbU+NPaGeVhXJXtNpvUbGS5E3kupBHyDj1+VfkL/Ayub9NRxyaEoeqdOsUBMJ0UBZ7OWKNCamg6rr1KVXKqhuO3HplQ5i9iab5g8Q5yfuZMuvG/KKFJ1iVed5U50zlQJ193sYQ3nBQ/K796KY6dnJU/zS+AYUj09RFEVRFHl+AMEWKA6VY532AAAAAElFTkSuQmCC"
        alt="image"
        cardTitle="card-title"
        title="Party Jokes Startling But Unnecessary"
        cardText="card-text"
        text="Topping sweet rolly candy bonbon cookie oat cake bonbon oat cake.Topping sweet roll cand candy bonbon cookie oat cake bonbon oat cake.Topping sweet roll cand candy bonbon cookie oat cake bonbon oat cake.Topping sweet roll cand candy bonbon cookie oat cake bonbon oat cake.Topping sweet roll cand bonbon cookie oat cake bonbon oat cake.Topping sweet roll candy bonbon cookie oat cake bonbon oat cake. "
      />
      <hr />
      <h2>Background and colour</h2>
      <CardBackgroundColour
        variant="card text-white col-4 col bg-primary mb-3 mx-3"
        cardHeader="card-header"
        header="Header"
        title="Primary card title"
        text="Some quick example text to build on the card title and make up the bulk of the card's content."
      />
      <CardBackgroundColour
        variant="card text-white col-4 bg-secondary mb-3 mx-3"
        cardHeader="card-header"
        header="Header"
        title="Secondary card title"
        text="Some quick example text to build on the card title and make up the bulk of the card's content."
      />
      <CardBackgroundColour
        variant="card text-white col-4 bg-success mb-3 mx-3"
        cardHeader="card-header"
        header="Header"
        title="Success card title"
        text="Some quick example text to build on the card title and make up the bulk of the card's content."
      />
      <CardBackgroundColour
        variant="card text-dark col-4 bg-light mb-3 mx-3"
        cardHeader="card-header"
        header="Header"
        title="Light card title"
        text="Some quick example text to build on the card title and make up the bulk of the card's content."
      />
      <CardBackgroundColour
        variant="card text-white col-4 bg-info mb-3 mx-3"
        cardHeader="card-header"
        header="Header"
        title="Info card title"
        text="Some quick example text to build on the card title and make up the bulk of the card's content."
      />
      <CardBackgroundColour
        variant="card text-white col-4 bg-warning mb-3 mx-3"
        cardHeader="card-header"
        header="Header"
        title="Warning card title"
        text="Some quick example text to build on the card title and make up the bulk of the card's content."
      />
      <CardBackgroundColour
        variant="card text-white col-4 bg-dark mb-3 mx-3"
        cardHeader="card-header"
        header="Header"
        title="Dark card title"
        text="Some quick example text to build on the card title and make up the bulk of the card's content."
      />
      <CardBackgroundColour
        variant="card text-white col-4 bg-danger mb-3 mx-3"
        cardHeader="card-header"
        header="Header"
        title="Danger card title"
        text="Some quick example text to build on the card title and make up the bulk of the card's content."
      />
      <hr />
      <h2>Border card</h2>
      <CardBorder
        cardBorder="card col-4 border-primary mb-3"
        cardHeader="card-header"
        header="Header"
        cardBody="card-body text-primary"
        cardTitle="card-text"
        title="Primary card title"
        cardText="card-text"
        text="Some quick example text to build on the card title and make up the bulk of the card's content."
      />
    </div>
  );
}
