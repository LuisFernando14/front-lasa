import './excel.css';
import readXlsxFile from 'read-excel-file'

export default {
  name: 'excel',
  mounted () {

  },
  computed: {},
  components: {},
  data () {
    return {
      files: []
    }
  },
  methods: {
    uploadFile () {
      console.log('iniciar sesión');
    },
    previewFiles (event) {
      // this.files = this.$refs.myFiles.files
      console.log(event);
      console.log(event.target.files);

      // console.log(this.files);
      readXlsxFile(event.target.files[0]).then((rows) => {
        // `rows` is an array of rows
        // each row being an array of cells.
        console.log(rows);
      })
    }
  },
  created () {
    console.log('creado de iniciar sesion');
  },
  beforeDestroy () {
    console.log('destruido');
  }
}
