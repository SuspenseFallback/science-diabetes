import { useState } from "react";
import "./App.css";
import { AuroraBackground } from "./components/aurora-background.tsx";
import { motion } from "framer-motion";
import { SparklesCore } from "./components/sparkles.tsx";
import { Boxes } from "./components/background-boxes.tsx";
import { Vortex } from "./components/vortex.tsx";
import { BackgroundGradient } from "./components/backround-gradient.tsx";
import { WavyBackground } from "./components/wavy-background.tsx";

function App() {
  return (
    <>
      <div>
        <div className="page title overflow-hidden">
          <Vortex
            backgroundColor="black"
            className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
          >
            <h1 className="text-white text-2xl md:text-6xl font-bold text-center">
              All about diabetes
            </h1>
          </Vortex>
        </div>
        <div className="page diabetes relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center">
          {/* <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
          <Boxes /> */}
          <WavyBackground>
            <div className="container">
              <h1
                initial={{ marginTop: 20, opacity: 0 }}
                whileInView={{ marginTop: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                }}
                className="header relative"
              >
                What is diabetes?
              </h1>
              <p
                initial={{ marginTop: 20, opacity: 0 }}
                whileInView={{ marginTop: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                }}
                className="content relative"
              >
                Diabetes mellitus is a disease in which the blood sugar level
                does not naturally stay in a normal range. This is because there
                are issues with the production and effectiveness of insulin, a
                hormone secreted in the pancreas that allows sugar to move into
                cells. There are two types of diabetes:
              </p>
              <ul
                className="relative"
                initial={{ marginTop: 20, opacity: 0 }}
                whileInView={{ marginTop: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                }}
              >
                <li>Type 1</li>
                <li>Type 2</li>
              </ul>
            </div>
          </WavyBackground>
        </div>
        <div className="page types bg-slate-900">
          <div className="container">
            <div className="left">
              <p className="title">Type 1</p>
              <div className="desc">
                <p>Type 1 Diabetes is an auto-immune condition.</p>
                <br />
                <p>
                  It occurs when the immune system attacks islet cells in the
                  pancreas that create insulin. This means that almost no
                  insulin is being produced.
                </p>
                <br />
                <p>It mostly occurs in young children and adolescents.</p>
                <br />
                <p>
                  This leads to abnormal blood sugar levels, because insulin
                  regulates how sugar exits the bloodstream into cells.
                </p>
                <br />
                <p>If left untreated, it can be deadly.</p>
                <br />
              </div>
            </div>
            <div className="right">
              <p className="title">Type 2</p>
              <div className="desc">
                <p>Type 2 Diabetes is not auto-immune.</p>
                <br />
                <p>
                  It occurs when the body becomes resistant to insulin, and
                  therefore the normal amount of insulin being produced is not
                  enough.
                </p>
                <br />
                <p>It mostly occurs in seniors.</p>
                <br />
                <p>
                  This leads to abnormal blood sugar levels, because insulin
                  regulates how sugar exits the bloodstream into cells.
                </p>
                <br />
                <p>If left untreated, it can be deadly.</p>
                <br />
              </div>
            </div>
          </div>
        </div>
        <div className="page affected bg-slate-900">
          <h1>Who is affected?</h1>
          <div className="container">
            <BackgroundGradient className="rounded-[22px] p-4 bg-zinc-900 dark:bg-zinc-900">
              <div className="card">
                <p>People with a family history of diabetes</p>
              </div>
            </BackgroundGradient>
            <BackgroundGradient className="rounded-[22px] p-4 bg-zinc-900 dark:bg-zinc-900">
              <div className="card">
                <p>Young children are most likely to get diabetes type 1</p>
              </div>
            </BackgroundGradient>
            <BackgroundGradient className="rounded-[22px] p-4 bg-zinc-900 dark:bg-zinc-900">
              <div className="card">
                <p>People can develop diabetes type 1 at any age</p>
              </div>
            </BackgroundGradient>
            <BackgroundGradient className="rounded-[22px] p-4 bg-zinc-900 dark:bg-zinc-900">
              <div className="card">
                <p>Seniors are prone to diabetes type 2</p>
              </div>
            </BackgroundGradient>
          </div>
        </div>
        <div className="page symptoms bg-slate-900">
          <h1>Symptoms</h1>
          <p>
            <ul>
              <li>Frequent urination</li>
              <li>Excessive thirst</li>
              <li>Fatigue</li>
              <li>Weight loss</li>
            </ul>
            <ul>
              <li>Healing is affected</li>
              <li>Blurred eyesight</li>
              <li>Increased hunger</li>
              <li>Nerve damage</li>
            </ul>
          </p>
        </div>
        <div className="page develop bg-slate-900">
          <h1>Why does it develop?</h1>
          <div className="container">
            <div className="left">
              <p className="title">Type 1</p>
              <div className="desc">
                <p>Type 1 Diabetes is an auto-immune condition.</p>
                <br />
                <p>
                  It occurs when the immune system attacks islet cells in the
                  pancreas that create insulin. This means that almost no
                  insulin is being produced.
                </p>
                <br />
                <p>It mostly occurs in young children and adolescents.</p>
                <br />
                <p>
                  This leads to abnormal blood sugar levels, because insulin
                  regulates how sugar exits the bloodstream into cells.
                </p>
                <br />
                <p>If left untreated, it can be deadly.</p>
                <br />
              </div>
            </div>
            <div className="right">
              <p className="title">Type 2</p>
              <div className="desc">
                <p>Type 2 Diabetes is not auto-immune.</p>
                <br />
                <p>
                  It occurs when the body becomes resistant to insulin, and
                  therefore the normal amount of insulin being produced is not
                  enough.
                </p>
                <br />
                <p>It mostly occurs in seniors.</p>
                <br />
                <p>
                  This leads to abnormal blood sugar levels, because insulin
                  regulates how sugar exits the bloodstream into cells.
                </p>
                <br />
                <p>If left untreated, it can be deadly.</p>
                <br />
              </div>
            </div>
          </div>
        </div>
        <div className="page treatment bg-slate-900">
          {/* <div className="w-full absolute inset-0 h-screen">
            <SparklesCore
              id="tsparticlesfullpage"
              background="transparent"
              minSize={0.6}
              maxSize={1.4}
              particleDensity={100}
              className="w-full h-full"
              particleColor="#FFFFFF"
            />
          </div> */}
          <h1>Treatment</h1>
          <div>
            <p>Insulin via injection</p>
            <br />
            <p>Oral medication such as metformin</p>
            <br />
            <p>Insulin pumps</p>
            <br />
            <p>Diet and exercise</p>
            <br />
            <p>Weight loss surgery (liposuction)</p>
          </div>
        </div>
        <div className="page  statistics bg-slate-900">
          <h1>Statistics</h1>
          <div className="stat">
            <p>About 422 million people worldwide have diabetes</p>
          </div>
          <div className="stat">
            <p>
              {" "}
              The number of people with diabetes rose from 108 million in 1980
              to 422 million in 2014. Prevalence has been rising more rapidly in
              low- and middle-income countries than in high-income countries.
            </p>
          </div>
          <div className="stat">
            <p>
              {" "}
              Between 2000 and 2019, there was a 3% increase in diabetes
              mortality rates by age.
            </p>
          </div>
          <div className="stat">
            <p>
              {" "}
              A healthy diet, regular physical activity, maintaining a normal
              body weight and avoiding tobacco use are ways to prevent or delay
              the onset of type 2 diabetes.
            </p>
          </div>
        </div>
        <div className="page foods bg-slate-900">
          <h1>What foods to avoid</h1>
          <ul>
            <li>Sugary foods</li>
            <li>Alcohol</li>
            <li>Dairy</li>
            <li>Cereal</li>
            <li>Processed meats</li>
            <li>Excessive fruits</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
