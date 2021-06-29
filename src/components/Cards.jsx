import React, { useContext } from 'react'
import stylePatternContext from '../contexts/stylePattern'
import EditableSection from './EditableSection'

const Card = ({ onFocusField, title, subTitle, desc }) => {
  const { state } = useContext(stylePatternContext)

  return (
    <div className="border border-gray-300 rounded p-6 mb-4">
      <EditableSection className="text-2xl" fieldName="title3" onFocusField={onFocusField} fontStyle={state.article.title3}>
        {title}
      </EditableSection>
      <EditableSection className="mb-4" fieldName="title4" onFocusField={onFocusField} fontStyle={state.article.title4}>
        {subTitle}
      </EditableSection>
      <EditableSection className="opacity-50" fieldName="body" onFocusField={onFocusField} fontStyle={state.article.body}>
        {desc}
      </EditableSection>
    </div>
  )
}

const Cards = ({ className, onFocusField }) => {
  return (
    <div className={`${className}`}>
      <Card onFocusField={onFocusField} title="Aliquam luctus purus nec tincidunt porta" subTitle="Vestibulum ornare turpis et sapien" desc="Nullam imperdiet orci quis malesuada rutrum. Ut viverra dictum risus, sed fermentum mauris vestibulum et. Suspendisse nunc dolor, efficitur sit amet vulputate at, blandit ac elit." />
      <Card onFocusField={onFocusField} title="Vivamus feugiat semper velit" subTitle="Cras sed tortor vestibulum" desc="Nullam imperdiet orci quis malesuada rutrum. Ut viverra dictum risus, sed fermentum mauris vestibulum et. Suspendisse nunc dolor, efficitur sit amet vulputate at, blandit ac elit." />
      <Card onFocusField={onFocusField} title="Cras sed tortor vestibulum" subTitle="Nullam imperdiet orci quis" desc="Nullam imperdiet orci quis malesuada rutrum. Ut viverra dictum risus, sed fermentum mauris vestibulum et. Suspendisse nunc dolor, efficitur sit amet vulputate at, blandit ac elit." />
      <Card onFocusField={onFocusField} title="Aliquam luctus purus nec tincidunt porta" subTitle="Vestibulum ornare turpis et sapien" desc="Nullam imperdiet orci quis malesuada rutrum. Ut viverra dictum risus, sed fermentum mauris vestibulum et. Suspendisse nunc dolor, efficitur sit amet vulputate at, blandit ac elit." />
    </div>
  )
}

export default Cards
