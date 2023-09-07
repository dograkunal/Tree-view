import * as React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { TreeView } from "@mui/x-tree-view/TreeView";
import { TreeItem } from "@mui/x-tree-view/TreeItem";

export default function RichObjectTreeView() {
  return (
    <div>
      {carsData &&
        carsData.map((el, index) => {
          return (
            <div key={index} className="drop">
              <TreeView
                aria-label="rich object"
                defaultCollapseIcon={<ExpandMoreIcon />}
                defaultExpanded={["root"]}
                defaultExpandIcon={<ChevronRightIcon />}
              >
                <TreeItem key={index} nodeId={"index"} label={el.name}>
                  {Array.isArray(el.features) &&
                    el.features.map((el) => {
                      return (
                        <TreeItem key={el.id} nodeId={el.id} label={el.name}>
                          {Array.isArray(el.options)
                            ? el.options.map((op) => (
                                <TreeItem
                                  key={`${index}+${op}`}
                                  nodeId={"index+op"}
                                  label={op}
                                />
                              ))
                            : null}
                        </TreeItem>
                      );
                    })}
                </TreeItem>
              </TreeView>
            </div>
          );
        })}
    </div>
  );
}

const carsData = [
  {
    name: "Honda Civic",
    price: 20000,
    features: [
      {
        id: "1",
        name: "Bluetooth",
        options: ["Hands-free calling", "Audio streaming"]
      },
      { id: "2", name: "Steering wheel controls" },
      {
        id: "3",
        name: "Android Auto"
      }
    ]
  },
  {
    name: "Toyota Corolla",
    price: 25000,

    features: [
      {
        id: "4",
        name: "Sunroof"
      },
      { id: "5", name: "Leather seats" },
      {
        id: "6",
        name: "Backup camera",
        options: ["HD Camera", "Front and Rear Sensors", "2 Beep on 15cm"]
      }
    ]
  },
  {
    name: "Ford Focus",
    price: 18000,
    features: [
      { id: "7", name: "Bluetooth" },
      { id: "8", name: "Leather seats" },
      { id: "9", name: "Steering wheel controls" },
      { id: "10", name: "Android Auto" }
    ]
  }
];
