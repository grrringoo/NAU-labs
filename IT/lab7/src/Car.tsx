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
    return (
      <div className="Car">
        <img className="Car-Image" src={imageUrl} />
        <div>{title}</div>
        <div>{price} {currency}</div>
      </div>);
  }
}

export default Car;
