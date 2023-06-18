import React from "react";

const SingleCart = (props) => {
  const { name, price, category, _id } = props.single;

  //delete an order

  const handleDelete = (id) => {
    const result = window.confirm("Do you want to delete?");
    if (result) {
      const url = `https://my-photography-server-shafiachy.vercel.app/${id}`;

      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            window.location.reload();
          }
        });
    }
  };
  return (
    <tr>
      <th scope="row" className="border-0">
        <div className="p-2">
          <div className="ml-3 d-inline-block align-middle">
            <h5 className="mb-0">
              {" "}
              <a href="#" className="text-dark d-inline-block align-middle">
                {name}
              </a>
            </h5>
            <span className="text-muted font-weight-normal font-italic d-block">
              Category: {category}
            </span>
          </div>
        </div>
      </th>
      <td className="border-0 align-middle">
        <strong>Tk {price}/-</strong>
      </td>

      <td className="border-0 align-middle">
        <button onClick={() => handleDelete(_id)} className="text-dark">
          <i className="fa fa-trash"></i>
        </button>
      </td>
    </tr>
  );
};

export default SingleCart;
