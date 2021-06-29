import React, { useContext } from 'react'
import stylePatternContext from '../contexts/stylePattern'
import EditableSection from './EditableSection'

const ArticlePattern = ({ onFocusField, className }) => {
  const { state } = useContext(stylePatternContext)

  return (
    <article className={`${className}`}>
      <EditableSection className="text-6xl" fieldName="title1" onFocusField={onFocusField} fontStyle={state.article.title1}>
        Etiam felis sapien
      </EditableSection>
      <EditableSection className="text-3xl mb-8" fieldName="title2" onFocusField={onFocusField} fontStyle={state.article.title2}>
        Viverra eu pellentesque
      </EditableSection>
      <EditableSection className="mb-4" fieldName="body" onFocusField={onFocusField} fontStyle={state.article.body}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed elit vitae sem fermentum fermentum sed quis est. Vestibulum sed efficitur magna, in pretium diam. Praesent auctor velit mauris, vel scelerisque sem egestas at. Vestibulum orci ligula, tristique id faucibus at, vestibulum nec tortor. Maecenas sagittis, purus eu auctor feugiat, nisi est rutrum turpis, in facilisis mi mauris ut sem. Vestibulum elit quam, placerat a venenatis quis, accumsan vel neque. Vestibulum nibh turpis, finibus dictum rutrum ac, placerat nec felis.
      </EditableSection>
      <EditableSection className="text-2xl" fieldName="title3" onFocusField={onFocusField} fontStyle={state.article.title3}>
        Quisque ultrices velit vitae volutpat
      </EditableSection>
      <EditableSection className="mb-4" fieldName="body" onFocusField={onFocusField} fontStyle={state.article.body}>
        Ut facilisis ligula ut sapien facilisis porta. Etiam consequat, risus lobortis elementum pulvinar, velit elit interdum est, a ornare nisi diam et est. Vestibulum vitae blandit diam. Curabitur luctus efficitur risus ut ultricies.
      </EditableSection>
      <EditableSection className="p-5 mb-4 md:py-5 md:px-10 md:mb-0 md:w-80 md:float-right" fieldName="quote" onFocusField={onFocusField} fontStyle={state.article.quote}>
        Etiam ac tincidunt nisi, suscipit eleifend urna. Curabitur sit amet sollicitudin est. Nullam imperdiet orci quis malesuada rutrum. Ut viverra dictum risus, sed fermentum mauris vestibulum et.
      </EditableSection>
      <EditableSection className="mb-4" fieldName="body" onFocusField={onFocusField} fontStyle={state.article.body}>
        Donec interdum arcu metus, a ultrices justo convallis vitae. Sed a massa ultrices, ultrices sem eget, porttitor dolor. In non nisl nulla. Mauris vel quam at augue pellentesque elementum. Suspendisse finibus quis felis eget faucibus. Suspendisse eu lacus sit amet erat imperdiet sollicitudin. Donec gravida, arcu id lobortis commodo, nisi leo auctor justo, a semper urna quam at dui. Nulla interdum turpis quis nisl interdum, ut efficitur metus finibus. Praesent ac ex sodales, ullamcorper risus nec, venenatis dolor. Vivamus ipsum libero, sagittis nec malesuada et, euismod quis eros. Proin facilisis purus eget turpis consectetur, ullamcorper sodales libero varius. Duis congue est id massa faucibus gravida. Mauris faucibus nunc vel congue pharetra. Pellentesque eleifend mauris non arcu porttitor, tempus tristique est vulputate.
      </EditableSection>
    </article>
  )
}

export default ArticlePattern