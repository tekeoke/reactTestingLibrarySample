import React from "react";
import { render, screen } from "@testing-library/react";
import Render from "./Render";

describe("Rendering", () => {
  // 全ての要素がレンダリングされていることをテストする
  it("Should render all the elements correctly", () => {
    render(<Render />);
    //renderで取得した内容を出力する
    //screen.debug();
    //https://github.com/A11yance/aria-query#elements-to-roles
    //screen.debug(screen.getByRole("heading"));
    //https://jestjs.io/docs/en/expect
    expect(screen.getByRole("heading")).toBeTruthy(); //h1タグが存在すること(hNを取得する)
    expect(screen.getByRole("textbox")).toBeTruthy();
    expect(screen.getAllByRole("button")[0]).toBeTruthy();
    expect(screen.getAllByRole("button")[1]).toBeTruthy();
    expect(screen.getByText("Udemy")).toBeTruthy();
    expect(screen.queryByText("Udeeeemy")).toBeNull(); //該当しない場合はnullを返してくれる
    expect(screen.getByTestId("copyright")).toBeTruthy();

    //screen.debug(screen.getByText("Udemy"));
  });
});
