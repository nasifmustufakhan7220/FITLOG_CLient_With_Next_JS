"use client";
import { oswald } from "@/app/font";
import EmptyTextShowing from "@/components/EmptyTextShowing/EmptyTextShowing";
import PlanSaveCard from "@/components/WorksOutCardsForPlan&Save/Plan&SaveCard";
import { exerciseContext } from "@/context/exerciseContext";
import { useContext } from "react";

const MyPlanPage = () => {
  const { addPlans, saveLater, toggle, setToggle} = useContext(exerciseContext);

  return (
    <div className="mt-12 w-full sm:mt-16 lg:mt-20">
      {/* Header */}
      <div className="mx-auto w-full max-w-270 px-4 sm:px-6 lg:px-8">
        <div className="space-y-1.5 sm:space-y-2">
          <h2
            className={`${oswald.className} text-[26px] font-bold sm:text-[30px] lg:text-[34px]`}
          >
            MY PLAN
          </h2>

          <p className="max-w-xl text-[13px] leading-5 text-[#9CA3AF] sm:text-[14px] sm:leading-6">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>
      </div>

      {/* Stats */}
      {toggle ? (
        <div className="mx-auto mt-6 w-full max-w-280 px-4 sm:mt-8 sm:px-6 lg:px-8">
          <div className="stats stats-vertical w-full overflow-hidden rounded-2xl border border-[#272c37] bg-[#13151c] sm:stats-horizontal">
            {/* Exercises */}
            <div className="stat px-5 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-7">
              <div className="stat-title text-[11px] text-[#8A92A0] sm:text-[12px]">
                Exercises
              </div>

              <div className="stat-value mt-1 text-[30px] font-bold text-[#CCFF00] sm:text-[34px] lg:text-[36px]">
                <span>{addPlans.length}</span>
              </div>
            </div>

            {/* Minutes */}
            <div className="stat border-t border-[#272c37] px-5 py-5 sm:border-l sm:border-t-0 sm:px-6 sm:py-6 lg:px-8 lg:py-7">
              <div className="stat-title text-[11px] text-[#8A92A0] sm:text-[12px]">
                Minutes
              </div>

              <div className="stat-value mt-1 text-[30px] font-bold text-white sm:text-[34px] lg:text-[36px]">
                <span>{addPlans.reduce((acc, curr)=> acc+= curr.duration,0)}</span>
              </div>
            </div>

            {/* Calories */}
            <div className="stat border-t border-[#272c37] px-5 py-5 sm:border-l sm:border-t-0 sm:px-6 sm:py-6 lg:px-8 lg:py-7">
              <div className="stat-title text-[11px] text-[#8A92A0] sm:text-[12px]">
                Calories
              </div>

              <div className="stat-value mt-1 text-[30px] font-bold text-white sm:text-[34px] lg:text-[36px]">
                <span>{addPlans.reduce((acc, curr)=> acc+=curr.caloriesBurned,0)}</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="mx-auto mt-6 w-full max-w-280 px-4 sm:mt-8 sm:px-6 lg:px-8">
          <div className="stats stats-vertical w-full overflow-hidden rounded-2xl border border-[#272c37] bg-[#13151c] sm:stats-horizontal">
            {/* Exercises */}
            <div className="stat px-5 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-7">
              <div className="stat-title text-[11px] text-[#8A92A0] sm:text-[12px]">
                Exercises
              </div>

              <div className="stat-value mt-1 text-[30px] font-bold text-[#CCFF00] sm:text-[34px] lg:text-[36px]">
                <span>{saveLater.length}</span>
              </div>
            </div>

            {/* Minutes */}
            <div className="stat border-t border-[#272c37] px-5 py-5 sm:border-l sm:border-t-0 sm:px-6 sm:py-6 lg:px-8 lg:py-7">
              <div className="stat-title text-[11px] text-[#8A92A0] sm:text-[12px]">
                Minutes
              </div>

              <div className="stat-value mt-1 text-[30px] font-bold text-white sm:text-[34px] lg:text-[36px]">
                <span>{saveLater.reduce((acc,curr)=>acc+=curr.duration,0)}</span>
              </div>
            </div>

            {/* Calories */}
            <div className="stat border-t border-[#272c37] px-5 py-5 sm:border-l sm:border-t-0 sm:px-6 sm:py-6 lg:px-8 lg:py-7">
              <div className="stat-title text-[11px] text-[#8A92A0] sm:text-[12px]">
                Calories
              </div>

              <div className="stat-value mt-1 text-[30px] font-bold text-white sm:text-[34px] lg:text-[36px]">
                <span>{saveLater.reduce((acc,curr)=>acc+=curr.caloriesBurned,0)}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      

      {/* Tabs */}
      <div className="mx-auto mt-6 w-full max-w-280 px-4 sm:mt-8 sm:px-6 lg:px-8">
        <div className="tabs tabs-box w-full bg-[#13151c] p-1.5 sm:p-2">
          {/* Today's Plan */}
          <input onChange={()=>setToggle(true)}
            type="radio"
            name="my_tabs_6"
            className="tab flex-1 text-xs font-medium text-[#8A92A0] transition-all duration-300 checked:bg-[#CCFF00] checked:text-[#13151c] sm:text-sm"
            aria-label="Today's Plan"
            defaultChecked
          />

          <div className="tab-content mt-1 w-full rounded-xl border border-[#272b35] bg-[#1a1d26] p-4 sm:mt-2 sm:p-6">
            {addPlans.length > 0 ? (
              <div className="flex flex-col gap-4">
                {addPlans.map((exercise, indx) => (
                  <PlanSaveCard key={indx} exercise={exercise}></PlanSaveCard>
                ))}
              </div>
            ) : (
              <EmptyTextShowing />
            )}
          </div>

          {/* Saved */}
          <input onChange={()=>setToggle(false)}
            type="radio"
            name="my_tabs_6"
            className="tab flex-1 text-xs font-medium text-[#8A92A0] transition-all duration-300 checked:bg-[#CCFF00] checked:text-[#13151c] sm:text-sm"
            aria-label="Saved"
          />

          <div className="tab-content mt-1 w-full rounded-xl border border-[#272b35] bg-[#1a1d26] p-4 sm:mt-2 sm:p-6">
            {saveLater.length > 0 ? (
              <div className="flex flex-col gap-4">
                {saveLater.map((exercise, indx) => (
                  <PlanSaveCard key={indx} exercise={exercise}></PlanSaveCard>
                ))}
              </div>
            ) : (
              <EmptyTextShowing />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPlanPage;
