import { Fragment } from "react";

function LeftData(props) {
  const item = props.data;
  console.log(props.data);

  return (
    <Fragment>
      <table className="sr table-auto border border-slate-500 shadow rounded ">
        <thead>
          <tr className="border-0">
            <th colSpan="2" className="p-0 border-0 rounded">
              <div style={{ width: "100%" }}>
                <img
                  alt={item.name.common}
                  className="w-40 text-center"
                  src={item.flags.svg}
                />
              </div>
            </th>
          </tr>
        </thead>
        <thead className="border border-slate-500">
          <tr>
            <th colSpan="2">Names</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-slate-500">Common</td>
            <td className="border border-slate-500">{item.name.common}</td>
          </tr>
          <tr>
            <td className="border border-slate-500">Common (Native)</td>
            <td className="border border-slate-500">
              {item.name?.nativeName?.ben?.common}
            </td>
          </tr>
          <tr>
            <td className="border border-slate-500">Official</td>
            <td className="border border-slate-500">{item.name.official}</td>
          </tr>
          <tr>
            <td className="border border-slate-500">Official (Native)</td>
            <td className="border border-slate-500">
              {item.name?.nativeName?.ben?.official}
            </td>
          </tr>
          {/* <tr>
            <td className="border border-slate-500">Alternative spellings</td>
            <td className="border border-slate-500">
              {item.name?.altSpellings["2"]}
            </td>
          </tr> */}
        </tbody>
      </table>
    </Fragment>
  );
}

export default LeftData;
