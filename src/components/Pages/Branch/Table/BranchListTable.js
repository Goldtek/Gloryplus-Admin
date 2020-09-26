import React from "react";
import MaterialTable from "material-table";

const BranchListTable = ({ branches }) => {
  return (
    <div>
      <MaterialTable
        title="List Of Church Branches"
        columns={[
          { title: "Branch Pastor", field: "brnchPst" },
          { title: "Gender", field: "gender" },
          { title: "Email", field: "email" },
          { title: "Phone", field: "phone" },
          { title: "Country", field: "country" },
          { title: "State", field: "state" },
          { title: "Address", field: "address" },
        ]}
        data={branches}
        actions={[
          {
            icon: "edit",
            tooltip: "edit data",
            onClick: (event, rowData) => alert("You saved " + rowData.name),
          },
        ]}
        editable={{
          onRowDelete: (oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                // dispatch(deleteTeacher(oldData.id));
                resolve();
              }, 1000);
            }),
        }}
      />
    </div>
  );
};

export default BranchListTable;
