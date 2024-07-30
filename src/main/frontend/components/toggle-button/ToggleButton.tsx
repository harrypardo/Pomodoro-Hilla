
import { useState } from 'react';
import './toggle.styles.scss';


interface Props {
  handleChange?: () => void;
}

export default function ToggleButton(props: Props) {
    const {handleChange } = props;


    const [isSelected, setIsSelected] = useState(false);


    const onChange = () => {
      setIsSelected((sel ) => !sel);
      if(handleChange !== undefined) handleChange();
    };

    return(
      <label className="switch">
        <input   
        checked={isSelected}
        onChange={onChange}
        type="checkbox" />
        <span className="slider round"></span>
      </label>);
} 