import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "./store/loremCount";
import { addLorem } from "./store/loremSlice";
import { useEffect } from "react";
import LoremCard from "./component/LoremCard";
import "simplebar-react/dist/simplebar.min.css";
export function App() {
    const loremList = [];
    const lorem = useSelector((state: RootState) => state.lorem);
    const dispatch = useDispatch();
    useEffect(() => {
        while (loremList.length < lorem.loremCount) {
            loremList.push(LoremCard);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [lorem.loremCount]);

    return (
        <div className="flex flex-row justify-center items-center w-screen h-screen gap-3 bg-gray-800 text-white">
            <div className="">
                <button
                    onClick={() => {
                        dispatch(addLorem());
                        console.log("za");
                    }}
                >
                    Add Lorem
                </button>
            </div>
            {/* <SimpleBar style={{ maxHeight: 300 }}> */}
            <div className="lorem-container flex flex-col w-9/12 h-[90%] bg-slate-950 rounded-lg overflow-y-scroll">
                {Array(lorem.loremCount).fill(<LoremCard />)}
            </div>
            {/* </SimpleBar> */}
        </div>
    );
}

export default App;
