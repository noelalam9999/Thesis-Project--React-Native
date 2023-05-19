import config from "../config";

export async function getAccessToken() {
  return await fetch(`${config.API_URL}/delivery/accessToken`).then(
    (response) => response.json()
  );
}

export async function getCity() {
  try {
    return await fetch(`${config.API_URL}/delivery/cities`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(),
      credentials: "same-origin",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        return data;
      });
  } catch (error) {
    console.log(error);
  }
}

export async function getZone(city_id) {
  try {
    const pathaoTokenObject = await getAccessToken();

    const pathaoToken = pathaoTokenObject.pathaoToken.access_token;

    return await fetch(`${config.API_URL}/delivery/zones`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${pathaoToken}`,
      },
      body: JSON.stringify({ city_id, pathaoToken }),
      credentials: "same-origin",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        return data;
      });
  } catch (error) {
    console.log(error);
  }
}
export async function getArea(zone_id) {
  try {
    const pathaoTokenObject = await getAccessToken();
    const pathaoToken = pathaoTokenObject.pathaoToken.access_token;
    //console.log({ zone_id, pathaoToken });

    return await fetch(`${config.API_URL}/delivery/areas`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ zone_id, pathaoToken }),
      credentials: "same-origin",
    })
      .then((response) => response.json())
      .then((data) => {
        //console.log(data);
        return data;
      });
  } catch (error) {
    console.log(error);
  }
}

export async function createOrder(order) {
  const pathaoTokenObject = await getAccessToken();
  const pathaoToken = pathaoTokenObject.pathaoToken.access_token;
  //zone, area, address, city
  const orderDetails = {
    store_id: 97219,
    merchant_order_id: order._id,
    sender_name: "",
    sender_phone: "",
    recipient_name: "Asif",
    recipient_phone: order.phonenumber,
    recipient_address: order.shippingAddress,
    recipient_city: order.shippingAddress.split(",").reverse()[0],
    recipient_zone: order.shippingAddress.split(",")[0],
    recipient_area: order.shippingAddress.split(",")[1],
    delivery_type: "48",
    item_type: "2",
    special_instruction: "",
    item_quantity: order.quantity,
    item_weight: 1,
    amount_to_collect: 0,
    item_description: "",
  };
  console.log(orderDetails);
  return await fetch(`${config.API_URL}/delivery/order`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ orderDetails, pathaoToken }),
    credentials: "same-origin",
  }).then((response) => {
    console.log(response);
    // response.json()
  });
}
