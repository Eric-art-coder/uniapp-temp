import { environment as devEnvironment } from "./environment.dev";
import { environment as testEnvironment } from "./environment.test";
import { environment as prdEnvironment } from "./environment.prod";
import { EnvironmentDetial } from "@/models/common";

const environmentMap: { [index: string]: EnvironmentDetial } = {
  dev: devEnvironment,
  test: testEnvironment,
  prod: prdEnvironment
};

const mode = import.meta.env.VITE_MODE;
const environment = environmentMap[mode || "prod"];
export { environment };
