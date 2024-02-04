function Author({ name, courses }) {
    return (
        <>
            <p>Nome do autor: {name}</p>
            {/* Envio de Object */}
            <p>Curso: {courses.course}</p>
            <p>Preço: {courses.price}</p>
            <p>Carga Horária: {courses.workload}</p>
        </>
    );
}

export default Author;