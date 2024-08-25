const SkillsItem = ({ children, title }) => {
  return (
    <div
      className={`grho m-0 mb-3 mr-3 box-border flex min-w-fit max-w-[170px] flex-[1_0_auto] select-none flex-row items-center justify-around overflow-visible rounded-lg border border-gray-900 bg-slate-900 p-3`}
    >
      <h3 className="pointer-events-none m-0 mr-3 block select-none p-0 text-[0.9rem] font-medium leading-[1em]">
        {title}
      </h3>
      <div className="skills__icon">{children}</div>
    </div>
  )
}

export default SkillsItem
