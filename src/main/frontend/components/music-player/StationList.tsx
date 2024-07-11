import { Details, Item, ListBox } from "@vaadin/react-components";
import { STATIONS } from "./stations";
import { StationListProps } from "./types";
import { useState } from "react";



export default function StationList({ onChangeStation }: StationListProps) {

    const STATION_LIST = Object.keys(STATIONS);
    const [selected, setSelected] = useState(0);

    return (<div>

        <Details summary="Stations" >
            <ListBox selected={selected}
                onSelectedChanged={(e) => {
                    onChangeStation(STATIONS[STATION_LIST[e.detail.value]]);
                    setSelected(e.detail.value);
                }}
            >
                {STATION_LIST.map((key) => <Item key={key}>{STATIONS[key].name}</Item>)}
            </ListBox>
        </Details>

    </div>)
}