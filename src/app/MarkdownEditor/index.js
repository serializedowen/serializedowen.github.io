import React from 'react'
import ReactMde from 'react-mde'
import ReactMarkdown from 'react-markdown'
import { styled } from '@material-ui/core'
import 'react-mde/lib/styles/css/react-mde-all.css'
import { Content, Header, Wrapper } from 'src/components'
import EditorMdImpl from './EditorMdImpl'
import Loadable from '@loadable/component'

const MarkDownEditorLiteImpl = Loadable(() =>
  import('./MarkDownEditorLiteImpl')
)

function loadSuggestions(text) {
  return new Promise((accept, reject) => {
    setTimeout(() => {
      const suggestions = [
        {
          preview: 'Andre',
          value: '@andre'
        },
        {
          preview: 'Angela',
          value: '@angela'
        },
        {
          preview: 'David',
          value: '@david'
        },
        {
          preview: 'Louise',
          value: '@louise'
        }
      ].filter(i => i.preview.toLowerCase().includes(text.toLowerCase()))
      accept(suggestions)
    }, 250)
  })
}

export default function MarkdownEditor() {
  const [value, setValue] = React.useState('**Hello world!!!**')
  const [selectedTab, setSelectedTab] = React.useState('write')

  const save = async function*(data) {
    // Promise that waits for "time" milliseconds
    const wait = function(time) {
      return new Promise((a, r) => {
        setTimeout(() => a(), time)
      })
    }

    // Upload "data" to your server
    // Use XMLHttpRequest.send to send a FormData object containing
    // "data"
    // Check this question: https://stackoverflow.com/questions/18055422/how-to-receive-php-image-data-over-copy-n-paste-javascript-with-xmlhttprequest

    await wait(2000)
    // yields the URL that should be inserted in the markdown
    yield 'https://picsum.photos/300'
    await wait(2000)

    // returns true meaning that the save was successful
    return true
  }

  return (
    <Wrapper>
      <Header></Header>
      <Content>
        {/* <EditorMdImpl></EditorMdImpl> */}
        <MarkDownEditorLiteImpl></MarkDownEditorLiteImpl>
        {/* <ReactMde
          minEditorHeight={600}
          minPreviewHeight={600}
          value={value}
          onChange={setValue}
          selectedTab={selectedTab}
          onTabChange={setSelectedTab}
          generateMarkdownPreview={markdown =>
            Promise.resolve(<ReactMarkdown source={markdown} />)
          }
          loadSuggestions={loadSuggestions}
          childProps={{
            writeButton: {
              tabIndex: -1
            }
          }}
          paste={{
            saveImage: save
          }}
        /> */}
      </Content>
    </Wrapper>
  )
}
