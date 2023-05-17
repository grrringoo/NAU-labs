import React from "react";

interface Props {
  title: string;
  price: number;
  currency: string;
  imageUrl: string;
}



class Car extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const { title, price, currency, imageUrl } = this.props;
    return React.createElement("div", { className: "Car" },
      React.createElement("img", { className: "Car-Image", src: imageUrl }),
      React.createElement("div", null, title),
      React.createElement("div", null, price, " ", currency)
    );

  }
}

export default Car;
