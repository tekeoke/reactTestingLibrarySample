import React from "react";
import { render, screen } from "@testing-library/react";
import UseEffectRender from "./UseEffectRender";

describe("useEffect rendering", () => {
  it("Should render only after async function resolved", async () => {
    render(<UseEffectRender />);
    //fetchJSONが完了するまで表示されないことをテストする
    expect(screen.queryByText(/I am/)).toBeNull();
    //非同期関数が実行されたら表示されることをテストする(findByTextでは非同期が完了するまで待ってくれる)
    expect(await screen.findByText(/I am/)).toBeInTheDocument();
  });
});
