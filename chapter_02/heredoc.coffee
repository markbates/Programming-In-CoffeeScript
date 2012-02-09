someName = 'user[firstName]'
someId = 'firstName'
someValue = 'Bob Example'

field = """
        <ul>
          <li>
            <input type='text' name='#{someName}' id='#{someId}' value='#{escape(someValue)}'>
          </li>
        </ul>
        """

console.log field