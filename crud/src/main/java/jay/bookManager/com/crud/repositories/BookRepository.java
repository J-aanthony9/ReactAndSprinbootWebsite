package jay.bookManager.com.crud.repositories;

import jay.bookManager.com.crud.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Book, Long> {
}
