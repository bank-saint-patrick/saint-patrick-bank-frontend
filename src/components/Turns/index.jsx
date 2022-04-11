import React from "react";
import Navbar from "../Navbar/index";

export const Turns = () => {

    return (
        <div className="wrapper text-center items-center">
            <Navbar />
            <div>
                <h1 className="bg-desert h-10 p-3 text-white text-lg">Calendar</h1>
                <table className="flex flex-col items-center">
                    <thead className="bg-pink-100">
                        <tr className="flex space-x-9">
                            <th>Lorem</th>
                            <th>Lorem</th>
                            <th>Lorem</th>
                            <th>Lorem</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr  className="flex space-x-9">
                            <td>Some</td>
                            <td>Some</td>
                            <td>Some</td>
                            <td>Some</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
};