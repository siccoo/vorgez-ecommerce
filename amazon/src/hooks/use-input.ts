import { useReducer } from "react";
import { Action } from "../shared/models/action.interface";
import {
  InputActionType,
  INPUT_ACTION_BLUR,
  INPUT_ACTION_CHANGE,
  INPUT_ACTION_CLEAR,
} from "./models/InputAction";
import { InputState } from "./models/InputState.interface";

const initialInputState: InputState = {
  text: "",
  hasBeenTouched: false,
};

const inputReducer = (state: InputState, action: Action<InputActionType>) => {
  const { type, value = "" } = action;

  switch (type) {
    case INPUT_ACTION_CHANGE:
      return { text: value, hasBeenTouched: state.hasBeenTouched };

    case INPUT_ACTION_BLUR:
      return { text: state.text, hasBeenTouched: true };

    case INPUT_ACTION_CLEAR:
      return { text: "", hasBeenTouched: false };
    default:
      return { ...state };
  }
};

const useInput = () => {
    const [{text, hasBeenTouched}, dispatch] = useReducer(inputReducer, initialInputState);

    
}
