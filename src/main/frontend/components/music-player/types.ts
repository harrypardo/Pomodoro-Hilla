export interface StationsType  {
    [key: string]: Station
}

export interface Station {
    name: string;
    url: string
}


export interface StationListProps {
    onChangeStation: (key: Station) => void;
}